import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";
import { SharedController } from "../../controller/SharedController.js";

export class AboutMe extends ViewComponent {

	isPublic = true;

	/**
	 * @Inject
	 * @Path controller/
	 * @type { SharedController }
	 */
	controller;

	template = `
    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title fade-in">About Me</h2>
            <div class="about-content">
                <div class="about-image slide-in-left"></div>
                <div class="about-text slide-in-right">
                    <h3>Passionate about creating meaningful digital experiences</h3>
                    <p>With over 5 years of experience in digital design, I specialize in creating user-centered solutions that bridge the gap between functionality and aesthetics. My approach combines strategic thinking with creative execution to deliver impactful results.</p>
                    <p>I believe that great design is not just about how it looks, but how it works and how it makes people feel. Every project is an opportunity to solve problems and create connections that matter.</p>
                    <p>When I'm not designing, you'll find me exploring new technologies, sketching ideas, or seeking inspiration in nature and architecture.</p>
                    <div class="skills">
                        <span class="skill-tag">UI/UX Design</span>
                        <span class="skill-tag">Web Development</span>
                        <span class="skill-tag">Brand Identity</span>
                        <span class="skill-tag">Motion Graphics</span>
                        <span class="skill-tag">Prototyping</span>
                        <span class="skill-tag">Design Systems</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
	`;

	stAfterInit(){

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, this.controller.observerOptions);

		const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
		animatedElements.forEach(el => observer.observe(el));

	}

	constructor(){
		super();
	}
}