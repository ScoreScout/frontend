export async function waitForElement(selector: string): Promise<Element> {
  return await new Promise<Element>((resolve) => {
    const element = document.querySelector(selector);
    if (element !== null) {
      resolve(element);
      return;
    }

    const observer = new MutationObserver((mutations) => {
      const element = document.querySelector(selector);
      if (element !== null) {
        observer.disconnect();
        resolve(element);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
