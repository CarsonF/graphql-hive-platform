/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ContourValues {
  commonAnnotations?: {
    [k: string]: unknown;
  };
  commonLabels?: {
    [k: string]: unknown;
  };
  configInline?: {
    "accesslog-format"?: string;
    disablePermitInsecure?: boolean;
    tls?: {
      "fallback-certificate"?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  contour?: {
    affinity?: {
      [k: string]: unknown;
    };
    args?: unknown[];
    automountServiceAccountToken?: boolean;
    certgen?: {
      automountServiceAccountToken?: boolean;
      certificateLifetime?: number;
      networkPolicy?: {
        allowExternal?: boolean;
        allowExternalEgress?: boolean;
        enabled?: boolean;
        extraEgress?: unknown[];
        extraIngress?: unknown[];
        ingressNSMatchLabels?: {
          [k: string]: unknown;
        };
        ingressNSPodMatchLabels?: {
          [k: string]: unknown;
        };
        kubeAPIServerPorts?: number[];
        [k: string]: unknown;
      };
      serviceAccount?: {
        annotations?: {
          [k: string]: unknown;
        };
        automountServiceAccountToken?: boolean;
        create?: boolean;
        name?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    command?: unknown[];
    configPath?: boolean;
    containerPorts?: {
      metrics?: number;
      xds?: number;
      [k: string]: unknown;
    };
    containerSecurityContext?: {
      allowPrivilegeEscalation?: boolean;
      capabilities?: {
        drop?: string[];
        [k: string]: unknown;
      };
      enabled?: boolean;
      privileged?: boolean;
      readOnlyRootFilesystem?: boolean;
      runAsGroup?: number;
      runAsNonRoot?: boolean;
      runAsUser?: number;
      seLinuxOptions?: {
        [k: string]: unknown;
      };
      seccompProfile?: {
        type?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    contourConfigName?: string;
    customLivenessProbe?: {
      [k: string]: unknown;
    };
    customReadinessProbe?: {
      [k: string]: unknown;
    };
    customStartupProbe?: {
      [k: string]: unknown;
    };
    debug?: boolean;
    enabled?: boolean;
    envoyServiceName?: string;
    envoyServiceNamespace?: string;
    extraArgs?: unknown[];
    extraEnvVars?: unknown[];
    extraEnvVarsCM?: string;
    extraEnvVarsSecret?: string;
    extraVolumeMounts?: unknown[];
    extraVolumes?: unknown[];
    hostAliases?: unknown[];
    image?: {
      debug?: boolean;
      digest?: string;
      pullPolicy?: string;
      pullSecrets?: unknown[];
      registry?: string;
      repository?: string;
      tag?: string;
      [k: string]: unknown;
    };
    ingressClass?: {
      create?: boolean;
      default?: boolean;
      name?: string;
      [k: string]: unknown;
    };
    ingressStatusAddress?: string;
    initContainers?: unknown[];
    kubernetesDebug?: number;
    leaderElectionResourceName?: string;
    lifecycleHooks?: {
      [k: string]: unknown;
    };
    livenessProbe?: {
      enabled?: boolean;
      failureThreshold?: number;
      initialDelaySeconds?: number;
      periodSeconds?: number;
      successThreshold?: number;
      timeoutSeconds?: number;
      [k: string]: unknown;
    };
    logFormat?: string;
    manageCRDs?: boolean;
    networkPolicy?: {
      allowExternal?: boolean;
      allowExternalEgress?: boolean;
      enabled?: boolean;
      extraEgress?: unknown[];
      extraIngress?: unknown[];
      ingressNSMatchLabels?: {
        [k: string]: unknown;
      };
      ingressNSPodMatchLabels?: {
        [k: string]: unknown;
      };
      kubeAPIServerPorts?: number[];
      [k: string]: unknown;
    };
    nodeAffinityPreset?: {
      key?: string;
      type?: string;
      values?: unknown[];
      [k: string]: unknown;
    };
    nodeSelector?: {
      [k: string]: unknown;
    };
    overloadManager?: {
      enabled?: boolean;
      maxHeapBytes?: string;
      [k: string]: unknown;
    };
    pdb?: {
      create?: boolean;
      maxUnavailable?: string;
      minAvailable?: string;
      [k: string]: unknown;
    };
    podAffinityPreset?: string;
    podAnnotations?: {
      [k: string]: unknown;
    };
    podAntiAffinityPreset?: string;
    podLabels?: {
      [k: string]: unknown;
    };
    podSecurityContext?: {
      enabled?: boolean;
      fsGroup?: number;
      fsGroupChangePolicy?: string;
      supplementalGroups?: unknown[];
      sysctls?: unknown[];
      [k: string]: unknown;
    };
    priorityClassName?: string;
    readinessProbe?: {
      enabled?: boolean;
      failureThreshold?: number;
      initialDelaySeconds?: number;
      periodSeconds?: number;
      successThreshold?: number;
      timeoutSeconds?: number;
      [k: string]: unknown;
    };
    replicaCount?: number;
    resources?: {
      [k: string]: unknown;
    };
    resourcesPreset?: string;
    rootNamespaces?: string;
    schedulerName?: string;
    service?: {
      annotations?: {
        [k: string]: unknown;
      };
      clusterIP?: string;
      externalTrafficPolicy?: string;
      extraPorts?: unknown[];
      loadBalancerClass?: string;
      loadBalancerIP?: string;
      loadBalancerSourceRanges?: unknown[];
      nodePorts?: {
        xds?: string;
        [k: string]: unknown;
      };
      ports?: {
        metrics?: number;
        xds?: number;
        [k: string]: unknown;
      };
      sessionAffinity?: string;
      sessionAffinityConfig?: {
        [k: string]: unknown;
      };
      type?: string;
      [k: string]: unknown;
    };
    serviceAccount?: {
      annotations?: {
        [k: string]: unknown;
      };
      automountServiceAccountToken?: boolean;
      create?: boolean;
      name?: string;
      [k: string]: unknown;
    };
    sidecars?: unknown[];
    startupProbe?: {
      enabled?: boolean;
      failureThreshold?: number;
      initialDelaySeconds?: number;
      periodSeconds?: number;
      successThreshold?: number;
      timeoutSeconds?: number;
      [k: string]: unknown;
    };
    terminationGracePeriodSeconds?: string;
    tlsExistingSecret?: string;
    tolerations?: unknown[];
    topologySpreadConstraints?: unknown[];
    updateStrategy?: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  defaultBackend?: {
    affinity?: {
      [k: string]: unknown;
    };
    args?: unknown[];
    command?: unknown[];
    containerPorts?: {
      http?: number;
      [k: string]: unknown;
    };
    containerSecurityContext?: {
      allowPrivilegeEscalation?: boolean;
      capabilities?: {
        drop?: string[];
        [k: string]: unknown;
      };
      enabled?: boolean;
      privileged?: boolean;
      readOnlyRootFilesystem?: boolean;
      runAsGroup?: number;
      runAsNonRoot?: boolean;
      runAsUser?: number;
      seLinuxOptions?: {
        [k: string]: unknown;
      };
      seccompProfile?: {
        type?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    customLivenessProbe?: {
      [k: string]: unknown;
    };
    customReadinessProbe?: {
      [k: string]: unknown;
    };
    customStartupProbe?: {
      [k: string]: unknown;
    };
    enabled?: boolean;
    extraArgs?: {
      [k: string]: unknown;
    };
    extraEnvVars?: unknown[];
    extraEnvVarsCM?: string;
    extraEnvVarsSecret?: string;
    extraVolumeMounts?: unknown[];
    extraVolumes?: unknown[];
    hostAliases?: unknown[];
    image?: {
      digest?: string;
      pullPolicy?: string;
      pullSecrets?: unknown[];
      registry?: string;
      repository?: string;
      tag?: string;
      [k: string]: unknown;
    };
    initContainers?: unknown[];
    lifecycleHooks?: {
      [k: string]: unknown;
    };
    livenessProbe?: {
      enabled?: boolean;
      failureThreshold?: number;
      initialDelaySeconds?: number;
      periodSeconds?: number;
      successThreshold?: number;
      timeoutSeconds?: number;
      [k: string]: unknown;
    };
    networkPolicy?: {
      allowExternal?: boolean;
      allowExternalEgress?: boolean;
      enabled?: boolean;
      extraEgress?: unknown[];
      extraIngress?: unknown[];
      ingressNSMatchLabels?: {
        [k: string]: unknown;
      };
      ingressNSPodMatchLabels?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    nodeAffinityPreset?: {
      key?: string;
      type?: string;
      values?: unknown[];
      [k: string]: unknown;
    };
    nodeSelector?: {
      [k: string]: unknown;
    };
    pdb?: {
      create?: boolean;
      maxUnavailable?: string;
      minAvailable?: string;
      [k: string]: unknown;
    };
    podAffinityPreset?: string;
    podAnnotations?: {
      [k: string]: unknown;
    };
    podAntiAffinityPreset?: string;
    podLabels?: {
      [k: string]: unknown;
    };
    podSecurityContext?: {
      enabled?: boolean;
      fsGroup?: number;
      fsGroupChangePolicy?: string;
      supplementalGroups?: unknown[];
      sysctls?: unknown[];
      [k: string]: unknown;
    };
    priorityClassName?: string;
    readinessProbe?: {
      enabled?: boolean;
      failureThreshold?: number;
      initialDelaySeconds?: number;
      periodSeconds?: number;
      successThreshold?: number;
      timeoutSeconds?: number;
      [k: string]: unknown;
    };
    replicaCount?: number;
    resources?: {
      [k: string]: unknown;
    };
    resourcesPreset?: string;
    schedulerName?: string;
    service?: {
      annotations?: {
        [k: string]: unknown;
      };
      ports?: {
        http?: number;
        [k: string]: unknown;
      };
      type?: string;
      [k: string]: unknown;
    };
    sidecars?: unknown[];
    startupProbe?: {
      enabled?: boolean;
      failureThreshold?: number;
      initialDelaySeconds?: number;
      periodSeconds?: number;
      successThreshold?: number;
      timeoutSeconds?: number;
      [k: string]: unknown;
    };
    terminationGracePeriodSeconds?: number;
    tolerations?: unknown[];
    topologySpreadConstraints?: unknown[];
    updateStrategy?: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  diagnosticMode?: {
    args?: number[];
    command?: string[];
    enabled?: boolean;
    [k: string]: unknown;
  };
  envoy?: {
    affinity?: {
      [k: string]: unknown;
    };
    args?: unknown[];
    automountServiceAccountToken?: boolean;
    autoscaling?: {
      behavior?: {
        [k: string]: unknown;
      };
      enabled?: boolean;
      maxReplicas?: number;
      minReplicas?: number;
      targetCPU?: string;
      targetMemory?: string;
      [k: string]: unknown;
    };
    command?: unknown[];
    containerPorts?: {
      http?: number;
      https?: number;
      metrics?: number;
      [k: string]: unknown;
    };
    containerSecurityContext?: {
      allowPrivilegeEscalation?: boolean;
      capabilities?: {
        drop?: string[];
        [k: string]: unknown;
      };
      enabled?: boolean;
      privileged?: boolean;
      readOnlyRootFilesystem?: boolean;
      runAsGroup?: number;
      runAsNonRoot?: boolean;
      runAsUser?: number;
      seLinuxOptions?: {
        [k: string]: unknown;
      };
      seccompProfile?: {
        type?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    customLivenessProbe?: {
      [k: string]: unknown;
    };
    customReadinessProbe?: {
      [k: string]: unknown;
    };
    customStartupProbe?: {
      [k: string]: unknown;
    };
    dnsPolicy?: string;
    enabled?: boolean;
    extraArgs?: unknown[];
    extraEnvVars?: unknown[];
    extraEnvVarsCM?: string;
    extraEnvVarsSecret?: string;
    extraVolumeMounts?: unknown[];
    extraVolumes?: unknown[];
    hostAliases?: unknown[];
    hostIPs?: {
      http?: string;
      https?: string;
      metrics?: string;
      [k: string]: unknown;
    };
    hostNetwork?: boolean;
    hostPorts?: {
      http?: number;
      https?: number;
      metrics?: number;
      [k: string]: unknown;
    };
    image?: {
      digest?: string;
      pullPolicy?: string;
      pullSecrets?: unknown[];
      registry?: string;
      repository?: string;
      tag?: string;
      [k: string]: unknown;
    };
    initConfig?: {
      containerSecurityContext?: {
        allowPrivilegeEscalation?: boolean;
        capabilities?: {
          drop?: string[];
          [k: string]: unknown;
        };
        enabled?: boolean;
        privileged?: boolean;
        readOnlyRootFilesystem?: boolean;
        runAsGroup?: number;
        runAsNonRoot?: boolean;
        runAsUser?: number;
        seLinuxOptions?: {
          [k: string]: unknown;
        };
        seccompProfile?: {
          type?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    initContainers?: unknown[];
    kind?: string;
    lifecycleHooks?: {
      [k: string]: unknown;
    };
    livenessProbe?: {
      enabled?: boolean;
      failureThreshold?: number;
      initialDelaySeconds?: number;
      periodSeconds?: number;
      port?: number;
      successThreshold?: number;
      timeoutSeconds?: number;
      [k: string]: unknown;
    };
    logLevel?: string;
    minReadySeconds?: number;
    networkPolicy?: {
      allowExternal?: boolean;
      allowExternalEgress?: boolean;
      enabled?: boolean;
      extraEgress?: unknown[];
      extraIngress?: unknown[];
      ingressNSMatchLabels?: {
        [k: string]: unknown;
      };
      ingressNSPodMatchLabels?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    nodeAffinityPreset?: {
      key?: string;
      type?: string;
      values?: unknown[];
      [k: string]: unknown;
    };
    nodeSelector?: {
      [k: string]: unknown;
    };
    pdb?: {
      create?: boolean;
      maxUnavailable?: string;
      minAvailable?: string;
      [k: string]: unknown;
    };
    podAffinityPreset?: string;
    podAnnotations?: {
      [k: string]: unknown;
    };
    podAntiAffinityPreset?: string;
    podLabels?: {
      [k: string]: unknown;
    };
    podSecurityContext?: {
      enabled?: boolean;
      fsGroup?: number;
      fsGroupChangePolicy?: string;
      supplementalGroups?: unknown[];
      sysctls?: unknown[];
      [k: string]: unknown;
    };
    priorityClassName?: string;
    readinessProbe?: {
      enabled?: boolean;
      failureThreshold?: number;
      initialDelaySeconds?: number;
      periodSeconds?: number;
      port?: number;
      successThreshold?: number;
      timeoutSeconds?: number;
      [k: string]: unknown;
    };
    replicaCount?: number;
    resources?: {
      [k: string]: unknown;
    };
    resourcesPreset?: string;
    revisionHistoryLimit?: number;
    schedulerName?: string;
    service?: {
      annotations?: {
        [k: string]: unknown;
      };
      clusterIP?: string;
      externalIPs?: unknown[];
      externalTrafficPolicy?: string;
      extraPorts?: unknown[];
      ipFamilies?: unknown[];
      ipFamilyPolicy?: string;
      labels?: {
        [k: string]: unknown;
      };
      loadBalancerClass?: string;
      loadBalancerIP?: string;
      loadBalancerSourceRanges?: unknown[];
      multiAz?: {
        enabled?: boolean;
        zones?: unknown[];
        [k: string]: unknown;
      };
      name?: string;
      nodePorts?: {
        http?: string;
        https?: string;
        [k: string]: unknown;
      };
      ports?: {
        http?: number;
        https?: number;
        metrics?: number;
        [k: string]: unknown;
      };
      sessionAffinity?: string;
      sessionAffinityConfig?: {
        [k: string]: unknown;
      };
      targetPorts?: {
        http?: string;
        https?: string;
        metrics?: string;
        [k: string]: unknown;
      };
      type?: string;
      [k: string]: unknown;
    };
    serviceAccount?: {
      annotations?: {
        [k: string]: unknown;
      };
      automountServiceAccountToken?: boolean;
      create?: boolean;
      name?: string;
      [k: string]: unknown;
    };
    shutdownManager?: {
      containerPorts?: {
        http?: number;
        [k: string]: unknown;
      };
      containerSecurityContext?: {
        allowPrivilegeEscalation?: boolean;
        capabilities?: {
          drop?: string[];
          [k: string]: unknown;
        };
        enabled?: boolean;
        privileged?: boolean;
        readOnlyRootFilesystem?: boolean;
        runAsGroup?: number;
        runAsNonRoot?: boolean;
        runAsUser?: number;
        seLinuxOptions?: {
          [k: string]: unknown;
        };
        seccompProfile?: {
          type?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      customLivenessProbe?: {
        [k: string]: unknown;
      };
      customReadinessProbe?: {
        [k: string]: unknown;
      };
      customStartupProbe?: {
        [k: string]: unknown;
      };
      enabled?: boolean;
      extraArgs?: unknown[];
      lifecycleHooks?: {
        [k: string]: unknown;
      };
      livenessProbe?: {
        enabled?: boolean;
        failureThreshold?: number;
        initialDelaySeconds?: number;
        periodSeconds?: number;
        successThreshold?: number;
        timeoutSeconds?: number;
        [k: string]: unknown;
      };
      readinessProbe?: {
        enabled?: boolean;
        failureThreshold?: number;
        initialDelaySeconds?: number;
        periodSeconds?: number;
        successThreshold?: number;
        timeoutSeconds?: number;
        [k: string]: unknown;
      };
      resources?: {
        [k: string]: unknown;
      };
      resourcesPreset?: string;
      startupProbe?: {
        enabled?: boolean;
        failureThreshold?: number;
        initialDelaySeconds?: number;
        periodSeconds?: number;
        successThreshold?: number;
        timeoutSeconds?: number;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    sidecars?: unknown[];
    startupProbe?: {
      enabled?: boolean;
      failureThreshold?: number;
      initialDelaySeconds?: number;
      periodSeconds?: number;
      port?: number;
      successThreshold?: number;
      timeoutSeconds?: number;
      [k: string]: unknown;
    };
    terminationGracePeriodSeconds?: number;
    tlsExistingSecret?: string;
    tolerations?: unknown[];
    topologySpreadConstraints?: unknown[];
    updateStrategy?: {
      type?: string;
      [k: string]: unknown;
    };
    useHostIP?: boolean;
    useHostPort?: {
      http?: boolean;
      https?: boolean;
      metrics?: boolean;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  existingConfigMap?: string;
  extraDeploy?: unknown[];
  fullnameOverride?: string;
  global?: {
    compatibility?: {
      openshift?: {
        adaptSecurityContext?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    imagePullSecrets?: unknown[];
    imageRegistry?: string;
    storageClass?: string;
    [k: string]: unknown;
  };
  ingress?: {
    annotations?: {
      [k: string]: unknown;
    };
    apiVersion?: string;
    certManager?: boolean;
    enabled?: boolean;
    extraHosts?: unknown[];
    extraPaths?: unknown[];
    extraRules?: unknown[];
    extraTls?: unknown[];
    hostname?: string;
    ingressClassName?: string;
    path?: string;
    pathType?: string;
    rulesOverride?: unknown[];
    secrets?: unknown[];
    selfSigned?: boolean;
    tls?: boolean;
    [k: string]: unknown;
  };
  kubeVersion?: string;
  metrics?: {
    prometheusRule?: {
      additionalLabels?: {
        [k: string]: unknown;
      };
      enabled?: boolean;
      namespace?: string;
      rules?: unknown[];
      [k: string]: unknown;
    };
    serviceMonitor?: {
      enabled?: boolean;
      honorLabels?: boolean;
      interval?: string;
      jobLabel?: string;
      labels?: {
        [k: string]: unknown;
      };
      metricRelabelings?: unknown[];
      namespace?: string;
      relabelings?: unknown[];
      scrapeTimeout?: string;
      selector?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  nameOverride?: string;
  namespaceOverride?: string;
  rbac?: {
    create?: boolean;
    rules?: unknown[];
    [k: string]: unknown;
  };
  tlsExistingSecret?: string;
  [k: string]: unknown;
}
