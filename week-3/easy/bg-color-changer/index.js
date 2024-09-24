const colors = [
    { id: 'Red', color: 'red' },
    { id: 'Yellow', color: 'Yellow' },
    { id: 'Black', color: 'Black' },
    { id: 'Green', color: 'Green' },
    { id: 'Purple', color: 'Purple' },
    { id: 'Orange', color: 'Orange' },
    { id: 'Default', color: 'White' }
  ];
  
  colors.forEach((color) => {
    const button = document.getElementById(color.id);
    button.addEventListener('click', () => {
      document.body.style.backgroundColor = color.color;
    });
  });