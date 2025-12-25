/**
 * Scrolls to a section by ID with smooth behavior
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Offset from top (default: 80)
 */
export const scrollToSection = (sectionId, offset = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - offset;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};

