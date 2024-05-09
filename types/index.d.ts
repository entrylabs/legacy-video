export declare interface MediaUtilsInterface {
    initialize(list?: string[][]): void;

    reset(): void;

    destroy(): void;

    compatabilityChecker(): void; // throws error if failed
}

/**
 * 엔트리 실제 인스턴스에 대한 정의
 */

declare interface EntryOptions {
    hardwareEnable?: boolean;
    mediaFilePath?: string;
    moduleBaseUrl?: string;
    moduleliteBaseUrl?: string;
    dataTableDisable?: boolean;
    offlineModulePath?: string;
}

type WSToastFunction = (title: string, message: string, isNotAutoDispose?: boolean) => void;

export declare interface IEntry extends EntryOptions {
    soundQueue: any;
    Func: any;
    externalModulesLite: any;
    loadAudio_: (filename: string[], name: string) => void;
    loadLiteTestModuleUploader: () => void;
    Model: (target: any, isSeal: boolean) => void;
    BlockView: any;
    SVG: any;
    Event: any;
    Code: any;
    BlockMenuScroller: any;

    // 엔트리 내 클래스들
    options: EntryOptions;
    engine: any;

    toast: {
        alert: WSToastFunction;
        warning: WSToastFunction;
        success: WSToastFunction;
        isOpen: (target?: any) => boolean;
    };
    workspace: any;
    console: any;
    Utils: any;
    GlobalSvg: any;
    Workspace: any;
    DragInstance: any;

    // 엔트리에서 네임스페이스에 할당되어있는 특정 객체들
    HARDWARE_LIST: { [hardwareName: string]: any };
    HARDWARE_LITE_LIST: { [hardwareName: string]: any };
    KeyboardCode: {
        map: { [keyname: string]: number };
        codeToKeyCode: { [keyname: string]: number };
    };
    events_: any;
    requestUpdate: boolean;
    TEXT_ALIGNS: string[];
    TEXT_ALIGN_LEFT: number;
    TEXT_ALIGN_CENTER: number;
    TEXT_ALIGN_RIGHT: number;
    block: {
        changeBlockText: (key: string, text: string) => void;
        changeBlockEvent: (key: string, event: string, callback: Function) => void;
    };
    interfaceState: { [key: string]: any };
    modal: any; // @entrylabs/modal

    // 엔트리 전역에 할당된 이벤트 객체
    disposeEvent: any;
    documentMousemove: any;
    keyPressed: any;
    windowResized: any;
    documentMousedown: any;

    // 엔트리 전역에 할당된 상수
    DRAG_MODE_DRAG: 2; // utils.js
    DRAG_MODE_NONE: 0;
    DRAG_MODE_MOUSEDOWN: 1;
    type: 'workspace' | string;

    // 엔트리에서 네임스페이스에 할당되어있는 특정 함수들
    addEventListener(type: string, listener: () => void): void;
    removeEventListener(eventName: string, listener: () => void): void;
    dispatchEvent(eventName: string, ...args: any): void;
    isMobile(): boolean;
    assert(predicate: any, message: string): void;
    resizeElement(interfaceModel?: any): void;
    loadExternalModules(project: any): Promise<void>;
    loadLiteExternalModules: (project?: any) => Promise<void>;
    bindAnimationCallbackOnce(element: any, func: () => void): void;
    createElement<K extends keyof HTMLElementTagNameMap>(
        type: HTMLElement | K,
        elementId?: string
    ): HTMLElementTagNameMap[K];
    do(commandName: string, ...args: any[]): any;

    expansionBlocks: any;
    aiUtilizeBlocks: any;
    hardwareLiteBlocks: any;
    generateHash: () => string;
}
