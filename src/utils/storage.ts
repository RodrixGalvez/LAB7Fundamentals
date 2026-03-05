const STORAGE_KEY = 'favoriteCountries';

export function getFavorites(): string[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveFavorites(favorites: string[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

export function toggleFavorite(code: string): string[] {
  const favorites = getFavorites();

  if (favorites.includes(code)) {
    const updated = favorites.filter(f => f !== code);
    saveFavorites(updated);
    return updated;
  }

  const updated = [...favorites, code];
  saveFavorites(updated);
  return updated;
}

export function clearFavorites(): void {
  localStorage.removeItem(STORAGE_KEY);
}