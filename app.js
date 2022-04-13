
const tl = gsap.timeline({ defaults: { duration: .7, ease: Back.easeOut.config(2), opacity: 0 } });
const tl2 = gsap.timeline({ defaults: { duration: 1.5, delay: 1 } });
const tl3 = gsap.timeline({ defaults: { duration: 1.5 } });

tl.from(".card-bg", { delay: 0.5, scale: .2, transformOrigin: "center" }, "=.2")
    .from(".card-top", { scaleY: 0, transformOrigin: "top" })
    .from(".icon", { scale: .2, transformOrigin: "center" }, "-=.7")
    .from(".blip1", { scaleX: 0 })
    .from(".blip2", { scaleX: 0 }, "-=.2")
    .from(".blip3", { scaleX: 0 }, "-=.3")
    .from(".blip4", { scaleX: 0 }, "-=.5")
    .from(".blip5", { scaleX: 0 }, "-=.7");

tl2.to(".whole-card", { y: 10, x: 3, repeat: -1, yoyo: true });
tl3.from(".main-content", { opacity: 0, y: 40, stagger: .3 });

console.log(window.innerWidth);

AOS.init({
    disable: function () {
        var maxWidth = 800;
        return window.innerWidth <= maxWidth;
    }
});
