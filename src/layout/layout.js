import column from "./modules/column";
import common from "./modules/common";
import horizontal from "./modules/horizontal"
import vertical from "./modules/vertical"
import comprehensive from "./modules/comprehensive"

import { useLayoutStore } from "@/store/layout";

import { computed, defineAsyncComponent } from "vue-demi";
import { storeToRefs } from "pinia";
import { sleep } from "@/utils/tools"


export function startLayout() {
    const modules = {
        'column': column,
        'common': common,
        "horizontal": horizontal,
        "vertical": vertical,
        "comprehensive": comprehensive,
    };

    const LayoutStore = useLayoutStore();
    const { currentLayoutType } = storeToRefs(LayoutStore);
    const currentLayout = computed(() => modules[currentLayoutType.value]);

    return {
        currentLayout,
        currentLayoutType,
    }
}
