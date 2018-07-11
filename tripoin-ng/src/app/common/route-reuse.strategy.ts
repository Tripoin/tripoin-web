import {
    RouteReuseStrategy,
    ActivatedRouteSnapshot,
    DetachedRouteHandle,
    RouterModule,
    Routes,
    UrlSegment,
    Router,
    PRIMARY_OUTLET,
    Route
} from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {

    private acceptedRoutes: string[] = [ "pages", "oauth2" ];
    private handlers: { [key: string]: DetachedRouteHandle } = {};
    private currentRoute: ActivatedRouteSnapshot;

    /**
     * Determines if this route (and its subtree) should be detached to be reused later
     * @param route
     */
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        if (!route.routeConfig || route.routeConfig.loadChildren)
            return false;
        if (this.acceptedRoutes.indexOf(route.routeConfig.path) > -1) {
            let currentUrl = this.getPath(this.currentRoute);         
            if(this.acceptedRoutes.indexOf(currentUrl) < 0) {
                console.log("[SIGMA] Activated Reuse Route...");
                console.log()
                return true;
            }
        }
        return false;
    }

    /**
     * Stores the detached route.
     */
    store( route: ActivatedRouteSnapshot, handler: DetachedRouteHandle ): void {
         if ( handler ) {
            this.handlers[this.getUrl(route)] = handler;
        }
    }

    /**
     * Determines if this route (and its subtree) should be reattached
     * @param route Stores the detached route.
     */
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!this.handlers[this.getUrl(route)];
    }

    /**
     * Retrieves the previously stored route
     */
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.routeConfig || route.routeConfig.loadChildren) return null;
        return this.handlers[this.getUrl(route)];
    }

    /**
     * Determines if a route should be reused
     * @param future
     * @param current
     */
    shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
        this.currentRoute = current;
        return (future.routeConfig === current.routeConfig);
    }

    /**
     * Returns a url for the current route
     * @param route
     */
    getUrl(route: ActivatedRouteSnapshot): string {
        if ( route.routeConfig ) {
            const url = route.routeConfig.path;
            return url;
        }
    }

    getURI(route: ActivatedRouteSnapshot) {
        let next = route;
        let url = "";
        while(next) {
            if(next.routeConfig)
                if (next.routeConfig.path)
                    url = next.routeConfig.path;
            next = next.firstChild;
        }
        return url;
    }
    
    getRoutePath(route: ActivatedRouteSnapshot): string {
        let namedOutletCount: number = 0;
        return route.pathFromRoot.reduce((path, route) => {
        let config: Route = route.routeConfig;
        if(config) {
            if(config.outlet && config.outlet !== PRIMARY_OUTLET) {
            path += `(${config.outlet}:`;
            namedOutletCount++;
            } else {
            path += '/';
            }
            return path += config.path
        }
        return path;
        }, '') + (namedOutletCount ? new Array(namedOutletCount + 1).join(')') : '');
    }

    getPath(route: ActivatedRouteSnapshot) {
        let next = route;
        let url = "";
        while(next) {
            if(next.url) {
                next.url.forEach(element => {
                    url = element.path;
                });
            }
            next = next.firstChild;
        }
        return url;
    }
    
}
  