import { SvelteComponent } from "svelte";
import { type BlurParams } from 'svelte/transition';
declare const __propDef: {
    props: {
        activeHeading?: HTMLHeadingElement | null | undefined;
        activeHeadingScrollOffset?: number | undefined;
        activeTocLi?: HTMLLIElement | null | undefined;
        aside?: HTMLElement | undefined;
        breakpoint?: number | undefined;
        desktop?: boolean | undefined;
        flashClickedHeadingsFor?: number | undefined;
        getHeadingIds?: ((node: HTMLHeadingElement) => string) | undefined;
        getHeadingLevels?: ((node: HTMLHeadingElement) => number) | undefined;
        getHeadingTitles?: ((node: HTMLHeadingElement) => string) | undefined;
        headings?: HTMLHeadingElement[] | undefined;
        headingSelector?: string | undefined;
        hide?: boolean | undefined;
        autoHide?: boolean | undefined;
        keepActiveTocItemInView?: boolean | undefined;
        minItems?: number | undefined;
        nav?: HTMLElement | undefined;
        open?: boolean | undefined;
        openButtonLabel?: string | undefined;
        reactToKeys?: string[] | undefined;
        pageBody?: string | HTMLElement | undefined;
        scrollBehavior?: "auto" | "smooth" | undefined;
        title?: string | undefined;
        titleTag?: string | undefined;
        tocItems?: HTMLLIElement[] | undefined;
        warnOnEmpty?: boolean | undefined;
        blurParams?: BlurParams | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'open-toc-icon': {};
        title: {};
        'toc-item': {
            heading: HTMLHeadingElement;
            idx: any;
        };
    };
};
export type TocProps = typeof __propDef.props;
export type TocEvents = typeof __propDef.events;
export type TocSlots = typeof __propDef.slots;
export default class Toc extends SvelteComponent<TocProps, TocEvents, TocSlots> {
}
export {};
