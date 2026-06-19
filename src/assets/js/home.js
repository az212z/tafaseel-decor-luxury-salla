import "lite-youtube-embed";
import BasePage from "./base-page";
import Lightbox from "fslightbox";
window.fslightbox = Lightbox;

class Home extends BasePage {
    onReady() {
        this.initFeaturedTabs();
        this.initTafaseelLuxuryMotion();
    }

    /**
     * used in views/components/home/featured-products-style*.twig
     */
    initFeaturedTabs() {
        app.all('.tab-trigger', el => {
            el.addEventListener('click', ({ currentTarget: btn }) => {
                let id = btn.dataset.componentId;
                // btn.setAttribute('fill', 'solid');
                app.toggleClassIf(`#${id} .tabs-wrapper>div`, 'is-active opacity-0 translate-y-3', 'inactive', tab => tab.id == btn.dataset.target)
                    .toggleClassIf(`#${id} .tab-trigger`, 'is-active', 'inactive', tabBtn => tabBtn == btn);

                // fadeIn active tabe
                setTimeout(() => app.toggleClassIf(`#${id} .tabs-wrapper>div`, 'opacity-100 translate-y-0', 'opacity-0 translate-y-3', tab => tab.id == btn.dataset.target), 100);
            })
        });
        document.querySelectorAll('.s-block-tabs').forEach(block => block.classList.add('tabs-initialized'));
    }

    initTafaseelLuxuryMotion() {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const revealItems = [...document.querySelectorAll('[data-tafaseel-reveal]')];

        if (!revealItems.length) {
            return;
        }

        if (reducedMotion || !('IntersectionObserver' in window)) {
            revealItems.forEach(item => item.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries, entryObserver) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add('is-visible');
                entryObserver.unobserve(entry.target);
            });
        }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

        revealItems.forEach((item, index) => {
            item.style.transitionDelay = `${Math.min(index * 45, 180)}ms`;
            observer.observe(item);
        });

        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            document.querySelectorAll('.tafaseel-motion-card').forEach(card => {
                card.addEventListener('pointermove', event => {
                    const rect = card.getBoundingClientRect();
                    const x = (event.clientX - rect.left) / rect.width - 0.5;
                    const y = (event.clientY - rect.top) / rect.height - 0.5;
                    card.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0) rotate(${x * 2}deg)`;
                });

                card.addEventListener('pointerleave', () => {
                    card.style.transform = '';
                });
            });
        }
    }
}

Home.initiateWhenReady(['index']);
