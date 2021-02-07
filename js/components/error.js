const newError = (message, error) => {
  return `
          <div class="woops">
          <p class="warning">${message}</p>
          <p>${error} </p>
          </div>
        `;
};
