import { BaseController } from "../../@still/component/super/service/BaseController.js";

export class SharedController extends BaseController{

    observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

}