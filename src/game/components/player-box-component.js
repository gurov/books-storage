import template from './player-box.html';

class PlayerBoxController {
    constructor(gameService) {
        this.players = gameService.test();
    }
}

export const playerBoxComponent = {
    template,
    controller: PlayerBoxController
};
