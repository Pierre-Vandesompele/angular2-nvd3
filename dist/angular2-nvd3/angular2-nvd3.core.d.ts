export declare namespace Angular2NvD3 {
    class NgNvD3 {
        private el;
        private chart;
        private svg;
        private viewInitialize;
        constructor(el: any);
        isViewInitialize(value: boolean): void;
        updateWithOptions(options: any, data: any): void;
        private updateWithData;
        private configure;
        private configureEvents;
        private clearElement;
    }
}
