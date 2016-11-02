import template from './court.html';
import './court.css';

class CourtController {
    constructor(gameService) {
        this.players = gameService.test();
    }
}

export const courtComponent = {
    template,
    controller: CourtController
};
