import { AuditLogManager } from '../../../audit-logs/providers/audit-logs-manager';
import { AuthManager } from '../../../auth/providers/auth-manager';
import { IdTranslator } from '../../../shared/providers/id-translator';
import { SchemaManager } from '../../providers/schema-manager';
import type { MutationResolvers } from './../../../../__generated__/types.next';

export const updateNativeFederation: NonNullable<
  MutationResolvers['updateNativeFederation']
> = async (_, { input }, { injector }) => {
  const translator = injector.get(IdTranslator);
  const [organization, project] = await Promise.all([
    translator.translateOrganizationId(input),
    translator.translateProjectId(input),
  ]);

  const result = await injector.get(SchemaManager).updateNativeSchemaComposition({
    project,
    organization,
    enabled: input.enabled,
  });

  const currentUser = await injector.get(AuthManager).getCurrentUser();
  await injector.get(AuditLogManager).createLogAuditEvent(
    {
      eventType: 'SCHEMA_POLICY_SETTINGS_UPDATED',
      schemaPolicySettingsUpdatedAuditLogSchema: {
        projectId: project,
        updatedFields: JSON.stringify({
          nativeFederation: input.enabled,
        }),
      },
    },
    {
      userId: currentUser.id,
      userEmail: currentUser.email,
      organizationId: organization,
      user: currentUser,
    },
  );

  return {
    ok: result,
  };
};
