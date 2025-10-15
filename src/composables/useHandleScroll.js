export default function useHandleScroll() {
    const setup = (window, document) => {
        const sections = ['sobre', 'stack', 'projetos-empresariais', 'projetos-pessoais', 'contact'];
        const scrollPosition = window.scrollY + 150; // Offset para melhor detecção

        for (const sectionId of sections) {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    activeSection.value = sectionId;
                    break;
                }
            }
        }
    }

    return {setup}
}