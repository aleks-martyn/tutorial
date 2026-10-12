function getRandomHexColorSecure() {
  // Створюємо масив із 3-х байтів (кожен від 0 до 255) для Red, Green та Blue channels
  const buffer = new Uint8Array(3);

  // Заповнюємо його криптографічно безпечними випадковими числами
  window.crypto.getRandomValues(buffer);

  // Перетворюємо кожен байт у hex-рядок та об'єднуємо їх у фінальний колір
  const hexColor = Array.from(buffer)
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');

  return `#${hexColor}`;
}
