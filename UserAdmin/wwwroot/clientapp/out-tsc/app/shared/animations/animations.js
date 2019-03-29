import { style, animate, transition, query, stagger } from '@angular/animations';
export function fadeIn(selector, duration) {
    if (duration === void 0) { duration = '400ms ease-out'; }
    return [
        transition('* => *', [
            query(selector, [
                style({ opacity: 0, transform: 'translateY(-5px)' }),
                stagger('50ms', [
                    animate(duration, style({
                        opacity: 1,
                        transform: 'translateY(0px)'
                    }))
                ])
            ], { optional: true })
        ])
    ];
}
export function fadeOut(selector, duration) {
    if (selector === void 0) { selector = ':leave'; }
    if (duration === void 0) { duration = 300; }
    return [
        transition('* => *', [
            query(selector, [
                style({ opacity: 1 }),
                stagger('50ms', [
                    animate(duration, style({
                        opacity: 0
                    }))
                ])
            ], { optional: true })
        ])
    ];
}
//# sourceMappingURL=animations.js.map