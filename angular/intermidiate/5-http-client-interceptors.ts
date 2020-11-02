// Q1 order

// HTTP get post put delete why do we need to subscribe to make request?
// When we receive request will the cd be called?
// Interceptor
/*
    export class myInterceptor implements Interceptor {

        intecept(req: HttpRequest, next: HttpHandler): HttpEvent {
            req = req.clone(
                Authentication: smth
            )

            return next(req).pipe(() => {
                counter --;
            })
        }
    }

    provide: HTTP_Interceptor
    useClass: MyInterceptor
    multi: true

*/
// Guard
// Resolver