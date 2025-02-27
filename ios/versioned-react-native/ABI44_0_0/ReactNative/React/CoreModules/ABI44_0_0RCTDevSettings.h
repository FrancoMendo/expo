/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <ABI44_0_0React/ABI44_0_0RCTBridge.h>
#import <ABI44_0_0React/ABI44_0_0RCTDefines.h>
#import <ABI44_0_0React/ABI44_0_0RCTEventEmitter.h>

@protocol ABI44_0_0RCTPackagerClientMethod;

/**
 * An abstraction for a key-value store to manage ABI44_0_0RCTDevSettings behavior.
 * The default implementation persists settings using NSUserDefaults.
 */
@protocol ABI44_0_0RCTDevSettingsDataSource <NSObject>

/**
 * Updates the setting with the given key to the given value.
 * How the data source's state changes depends on the implementation.
 */
- (void)updateSettingWithValue:(id)value forKey:(NSString *)key;

/**
 * Returns the value for the setting with the given key.
 */
- (id)settingForKey:(NSString *)key;

@end

@interface ABI44_0_0RCTDevSettings : ABI44_0_0RCTEventEmitter

- (instancetype)initWithDataSource:(id<ABI44_0_0RCTDevSettingsDataSource>)dataSource;

@property (nonatomic, readonly) BOOL isHotLoadingAvailable;
@property (nonatomic, readonly) BOOL isLiveReloadAvailable;
@property (nonatomic, readonly) BOOL isRemoteDebuggingAvailable;
@property (nonatomic, readonly) BOOL isDeviceDebuggingAvailable;
@property (nonatomic, readonly) BOOL isJSCSamplingProfilerAvailable;

/**
 * Whether the bridge is connected to a remote JS executor.
 */
@property (nonatomic, assign) BOOL isDebuggingRemotely;

/*
 * Whether shaking will show ABI44_0_0RCTDevMenu. The menu is enabled by default if ABI44_0_0RCT_DEV=1, but
 * you may wish to disable it so that you can provide your own shake handler.
 */
@property (nonatomic, assign) BOOL isShakeToShowDevMenuEnabled;

/**
 * Whether performance profiling is enabled.
 */
@property (nonatomic, assign, setter=setProfilingEnabled:) BOOL isProfilingEnabled;

/**
 * Whether hot loading is enabled.
 */
@property (nonatomic, assign, setter=setHotLoadingEnabled:) BOOL isHotLoadingEnabled;

/**
 * Enables starting of profiling sampler on launch
 */
@property (nonatomic, assign) BOOL startSamplingProfilerOnLaunch;

/**
 * Whether the element inspector is visible.
 */
@property (nonatomic, readonly) BOOL isElementInspectorShown;

/**
 * Whether the performance monitor is visible.
 */
@property (nonatomic, assign) BOOL isPerfMonitorShown;

/**
 * Toggle the element inspector.
 */
- (void)toggleElementInspector;

/**
 * Set up the HMRClient if loading the bundle from Metro.
 */
- (void)setupHMRClientWithBundleURL:(NSURL *)bundleURL;

/**
 * Register additional bundles with the HMRClient.
 */
- (void)setupHMRClientWithAdditionalBundleURL:(NSURL *)bundleURL;

#if ABI44_0_0RCT_DEV_MENU
- (void)addHandler:(id<ABI44_0_0RCTPackagerClientMethod>)handler
    forPackagerMethod:(NSString *)name __deprecated_msg("Use ABI44_0_0RCTPackagerConnection directly instead");
#endif

@end

@interface ABI44_0_0RCTBridge (ABI44_0_0RCTDevSettings)

@property (nonatomic, readonly) ABI44_0_0RCTDevSettings *devSettings;

@end

// In debug builds, the dev menu is enabled by default but it is further customizable using this method.
// However, this method only has an effect in builds where the dev menu is actually compiled in.
// (i.e. ABI44_0_0RCT_DEV or ABI44_0_0RCT_DEV_MENU is set)
ABI44_0_0RCT_EXTERN void ABI44_0_0RCTDevSettingsSetEnabled(BOOL enabled);
