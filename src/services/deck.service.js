import apiService from './api.service';

export const createDeck = () => {
	return apiService.get('/deck/new/shuffle');
};

export const shuffleDeck = (deckId) => {
	return apiService.get(`/deck/${deckId}/shuffle/?remaining=true`);
};

export const drawCard = (deckId) => {
	return apiService.get(`/deck/${deckId}/draw/?count=1`);
};

export const drawMultipleCards = (deckId, count = 2) => {
	return apiService.get(`/deck/${deckId}/draw/?count=${count}`);
};
