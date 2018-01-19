const TYPES = {
    Any: Symbol('Any'),
    AppArgs: Symbol('AppArgs'),
    Array: Symbol('Array'),
    Boolean: Symbol('Boolean'),
    BranchesStore: Symbol('BranchesStore'),
    BranchesStoreState: Symbol('BranchesStoreState'),
    BranchesStoreArgs: Symbol('BranchesStoreArgs'),
    ContentUserDataArgs: Symbol('ContentUserDataArgs'),
    ContentLoaderArgs: Symbol('ContentLoaderArgs'),
    ContentUserLoaderArgs: Symbol('ContentUserLoaderArgs'),
    CanvasUI: Symbol('CanvasUI'),
    CanvasUIArgs: Symbol('CanvasUIArgs'),
    DBSubscriberToTreeArgs: Symbol('DBSubscriberToTreeArgs'),
    DBSubscriberToTreeUserArgs: Symbol('DBSubscriberToTreeUserArgs'),
    DBSubscriberToTreeLocationArgs: Symbol('DBSubscriberToTreeLocationArgs'),
    FirebaseReference: Symbol('Reference'),
    FirebaseSyncerArgs: Symbol('PropertyAutoFirebaseSaverArgs'),
    Function: Symbol('Function'),
    IActivatableDatedMutation: Symbol('IActivatableDatedMutation'),
    IActivatableDatedMutationArr: Symbol('IActivatableDatedMutationArr'),
    IApp: Symbol('IApp'),
    ICanvasUI: Symbol('ICanvasUI'),
    IColorSlice: Symbol('IColorSlice'),
    IContentIdSigmaIdMap: Symbol('IContentIdSigmaIdMap'),
    IContentLoader: Symbol('IContentLoader'),
    IContentUserLoader: Symbol('IContentUserLoader'),
    IContentUserData: Symbol('IContentUserData'),
    IDatabaseAutoSaver: Symbol('IDatabaseAutoSaver'),
    IDBSubscriber: Symbol('IDBSubscriber'),
    IDBSubscriberToTreeLocation: Symbol('IDBSubscriberToTreeLocation'),
    IDBSubscriberToTree: Symbol('IDBSubscriberToTree'),
    IDatedMutation: Symbol('IDatedMutation'),
    IFirebaseRef: Symbol('IFirebaseRef'),
    IKnawledgeMapCreator: Symbol('IVueComponentCreator'),
    IKnawledgeMapCreatorClone: Symbol('IKnawledgeMapCreatorClone'),
    IManagedSigmaNodeCreatorCore: Symbol('IManagedSigmaNodeCreatorCore'),
    IMutableId: Symbol('IMutableField'),
    IMutableStringSet: Symbol('IMutableStringSet'),
    IMutableSubscribableTree: Symbol('IMutableSubscribableTree'),
    IMutableSubscribableTreeStore: Symbol('IMutableSubscribableTreeStore'),
    IMutableSubscribableTreeUserStore: Symbol('IMutableSubscribableTreeUserStore'),
    IMutableSubscribableTreeUser: Symbol('IMutableSubscribableTreeUser'),
    IMutableSubscribableTreeLocation: Symbol('IMutableSubscribableTreeLocation'),
    IMutableSubscribableTreeLocationStore: Symbol('IMutableSubscribableTreeLocationStore'),
    IMutableSubscribableContent: Symbol('IMutableSubscribableContent'),
    IMutableSubscribableContentUser: Symbol('IMutableSubscribableContentUser'),
    IMutableSubscribableContentUserStore: Symbol('IMutableSubscribableContentUserStore'),
    IMutableSubscribableContentStore: Symbol('IMutableSubscribableContentStore'),
    IMutableSubscribableGlobalStore: Symbol('IMutableSubscribableGlobalStore'),
    IOneToManyMap: Symbol('IOneToManyMap'),
    IProficiencyStats: Symbol('IProficiencyStats'),
    IProppedDatedMutation: Symbol('IProppedDatedMutation'),
    IRenderedNodesManager: Symbol('IRenderedNodesManager'),
    IRenderedNodesManagerCore: Symbol('IRenderedNodesManagerCore'),
    ISaveUpdatesToDBFunction: Symbol('ISaveUpdatesToDBFunction'),
    ISampleComponentCreator: Symbol('ITree2ComponentCreator'),
    ISigma: Symbol('ISigma'),
    ISigmaNode: Symbol('ISigmaNode'),
    ISigmaNodeCreator: Symbol('ISigmaNodeCreator'),
    ISigmaNodeCreatorCore: Symbol('ISigmaNodeCreatorCore'),
    ISigmaNodeCreatorCaller: Symbol('IStoreSourceUpdateListener'),
    ISigmaNodeData: Symbol('ISigmaNodeData'),
    ISigmaNodesUpdater: Symbol('ISigmaNodesUpdater'),
    ISigmaRenderManager: Symbol('ISigmaRenderManager'),
    ISigmaUpdater: Symbol('ISigmaUpdater'),
    ISpecialTreeLoader: Symbol('ISpecialTreeLoader'),
    IStoreSourceUpdateListener: Symbol('IStoreSourceUpdateListener'),
    IStoreSourceUpdateListenerCore: Symbol('IStoreSourceUpdateListenerCore'),
    ISubscribableContent: Symbol('ISubscribableContent'),
    ISubscribableContentStore: Symbol('ISubscribableContentStore'),
    ISubscribableContentStoreSource: Symbol('ISubscribableContentStoreSource'),
    ISubscribableContentUser: Symbol('ISubscribableContentUser'),
    ISubscribableContentUserStore: Symbol('ISubscribableContentUserStore'),
    ISubscribableContentUserStoreSource: Symbol('ISubscribableContentUserStoreSource'),
    ISubscribableGlobalStore: Symbol('ISubscribableGlobalStore'),
    ISubscribableMutableBoolean: Symbol('ISubscribableMutableBoolean'),
    ISubscribableMutableNumber: Symbol('ISubscribableMutableNumber'),
    ISubscribableMutableContentType: Symbol('ISubscribableMutableContentType'),
    ISubscribableMutableProficiency: Symbol('ISubscribableMutableProficiency'),
    ISubscribableMutableProficiencyStats: Symbol('ISubscribableMutableProficiencyStats'),
    ISubscribableMutableString: Symbol('ISubscribableMutableString'),
    ISubscribableMutableStringSet: Symbol('ISubscribableMutableStringSet'),
    ISubscribableStore_ISubscribableTreeCore: Symbol('ISubscribableStore_ISubscribableTreeCore'),
    ISubscribableTree: Symbol('ISubscribableTreeCore'),
    ISubscribableTreeStoreSource: Symbol('ISubscribableTreeStoreSource'),
    ISubscribableTreeLocation: Symbol('ISubscribableTreeLocation'),
    ISubscribableTreeLocationStore: Symbol('ISubscribableTreeLocationStore'),
    ISubscribableTreeLocationStoreSource: Symbol('ISubscribableTreeLocationStoreSource'),
    ISubscribableTreeUser: Symbol('ISubscribableTreeUser'),
    ISubscribableTreeUserStore: Symbol('ISubscribableTreeUserStore'),
    ISubscribableTreeUserStoreSource: Symbol('ISubscribableTreeUserStoreSource'),
    ISubscribableTreeStore: Symbol('ISubscribableTreeStore'),
    IMutableSubscribablePoint: Symbol('IMutableSubscribablePoint'),
    ISubscriber_ITypeAndIdAndValUpdates_Array: Symbol('ISubscriber_ITypeAndIdAndValUpdates_Array'),
    ISyncableObject: Symbol('ISyncableObject'),
    ITooltipOpener: Symbol('ITooltipOpener'),
    ITooltipRenderer: Symbol('ITooltipRenderer'),
    ITooltipRendererFunction: Symbol('ITooltipRendererFunction'),
    ITree: Symbol('ITree'),
    ITree2ComponentCreator: Symbol('ITree2ComponentCreator'),
    ITree3CreatorClone: Symbol('ITree3Creator'),
    ITreeComponentCreator: Symbol('ITreeComponentCreator'),
    ITreeComponentCreator2: Symbol('ITreeComponentCreator2'),
    ITreeLoader: Symbol('ITreeLoader'),
    ITreeLocation: Symbol('ITreeLocation'),
    ITreeLocationLoader: Symbol('ITreeLocationLoader'),
    ITreeUser: Symbol('ITree'),
    ITreeUserLoader: Symbol('ITreeUserLoader'),
    IVuexStore: Symbol('IVuexStore'),
    KnawledgeMapCreator: Symbol('KnawledgeMapCreator'),
    KnawledgeMapCreatorClone: Symbol('Tree3Creator'),
    KnawledgeMapCreatorArgs: Symbol('KnawledgeMapCreatorArgs'),
    ManagedSigmaNodeCreatorCoreArgs: Symbol('ManagedSigmaNodeCreatorCoreArgs'),
    MutableSubscribablePointArgs: Symbol('MutableSubscribablePointArgs'),
    MutableSubscribableGlobalStoreArgs: Symbol('MutableSubscribableGlobalStoreArgs'),
    Number: Symbol('Number'),
    Object: Symbol('Object'),
    ObjectFirebaseAutoSaverArgs: Symbol('ObjectFirebaseAutoSaverArgs'),
    ObjectDataTypes: Symbol('ObjectDataTypes'),
    OneToManyMapArgs: Symbol('OneToManyMapArgs'),
    PropertyFirebaseSaverArgs: Symbol('PropertyFirebaseSaverArgs'),
    PROFICIENCIES: Symbol('PROFICIENCIES'),
    RenderedNodesManagerArgs: Symbol('RenderedNodesManagerArgs'),
    RenderedNodesManagerCoreArgs: Symbol('RenderedNodesManagerCoreArgs'),
    Tree2ComponentCreatorArgs: Symbol('Tree2ComponentCreatorArgs'),
    Tree3CreatorArgs: Symbol('Tree3CreatorArgs'),
    Sigma: Symbol('Sigma'),
    SigmaConfigs: Symbol('SigmaConfigs'),
    SigmaEventListenerArgs: Symbol('SigmaEventListenerArgs'),
    SigmaEventListener: Symbol('SigmaEventListener'),
    SigmaNodeArgs: Symbol('SigmaNodeArgs'),
    SigmaNodeCreatorCoreArgs: Symbol('SigmaNodeCreatorCoreArgs'),
    SigmaNodeCreatorArgs: Symbol('SigmaNodeCreatorArgs'),
    SigmaNodesUpdaterArgs: Symbol('SigmaNodesUpdaterArgs'),
    SigmaRenderManager: Symbol('SigmaRenderManager'),
    SigmaRenderManagerArgs: Symbol('SigmaRenderManagerArgs'),
    SigmaUpdaterArgs: Symbol('SigmaUpdaterArgs'),
    SpecialTreeLoaderArgs: Symbol('SpecialTreeLoaderArgs'),
    String: Symbol('String'),
    StringNotEmpty: Symbol('StringNotEmpty'),
    StoreSourceUpdateListenerArgs: Symbol('StoreSourceUpdateListenerArgs'),
    StoreSourceUpdateListenerCoreArgs: Symbol('StoreSourceUpdateListenerCoreArgs'),
    Subscribable: Symbol('Subscribable'),
    SubscribableArgs: Symbol('SubscribableArgs'),
    SubscribableContentArgs: Symbol('SubscribableContentArgs'),
    SubscribableContentStoreArgs: Symbol('SubscribableContentStoreArgs'),
    SubscribableContentStoreSourceArgs: Symbol('SubscribableContentStoreSourceArgs'),
    SubscribableContentUserArgs: Symbol('SubscribableContentUserArgs'),
    SubscribableContentUserStoreArgs: Symbol('SubscribableContentUserStoreArgs'),
    SubscribableContentUserStoreSourceArgs: Symbol('SubscribableContentUserStoreSourceArgs'),
    SubscribableStoreArgs: Symbol('SubscribableStoreArgs'),
    SubscribableStoreSourceArgs: Symbol('SubscribableStoreSourceArgs'),
    SubscribableGlobalStoreArgs: Symbol('SubscribableGlobalStoreArgs'),
    SubscribableMutableFieldArgs: Symbol('ISubscribableMutableFieldArgs'),
    SubscribableMutableStringSetArgs: Symbol('SubscribableMutableStringSetArgs'),
    SubscribableTreeArgs: Symbol('SubscribableTreeArgs'),
    SubscribableTreeStoreArgs: Symbol('SubscribableTreeStoreArgs'),
    SubscribableTreeUserArgs: Symbol('SubscribableTreeUserArgs'),
    SubscribableTreeUserStoreArgs: Symbol('SubscribableTreeUserStoreArgs'),
    SubscribableTreeUserStoreSourceArgs: Symbol('SubscribableTreeUserStoreSourceArgs'),
    SubscribableTreeLocationArgs: Symbol('SubscribableTreeLocationArgs'),
    SubscribableTreeLocationStoreArgs: Symbol('SubscribableTreeLocationStoreArgs'),
    SubscribableTreeLocationStoreSourceArgs: Symbol('SubscribableTreeLocationStoreSourceArgs'),
    SubscribableTreeStoreSourceArgs: Symbol('SubscribableTreeStoreSourceArgs'),
    PropertyAutoFirebaseSaverArgs: Symbol('PropertyAutoFirebaseSaverArgs'),
    SyncToFirebaseArgs: Symbol('PropertyAutoFirebaseSaverArgs'),
    TooltipOpenerArgs: Symbol('TooltipOpenerArgs'),
    TooltipRendererArgs: Symbol('TooltipRendererArgs'),
    TreeComponentCreatorArgs: Symbol('TreeComponentCreatorArgs'),
    TreeComponentCreator2Args: Symbol('TreeComponentCreator2Args'),
    TreeLoaderArgs: Symbol('TreeLoaderArgs'),
    TreeLocationLoaderArgs: Symbol('TreeLocationLoaderArgs'),
    TreeUserLoaderArgs: Symbol('TreeUserLoaderArgs'),
    UIColor: Symbol('UIColor'),
    fGetSigmaIdsForContentId: Symbol('fGetSigmaIdsForContentId'),
    radian: Symbol('radian'),
}

export {TYPES}
