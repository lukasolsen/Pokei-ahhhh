interface Player {
  id: string;
  username: string;
  chips: number;
  isOwner: boolean;
}

export class Lobby {
  public id: string;
  public players: Player[];
  public owner: Player;
  public gameStarted: boolean;
  public turnId: string; //Players ID who's turn it is

  constructor(id: string, owner: Player) {
    this.id = id;
    this.players = [owner];
    this.owner = owner;
    this.gameStarted = false;
    this.turnId = "";
  }

  getTurnId() {
    return this.turnId;
  }

  startGame() {
    this.gameStarted = true;
    this.turnId = this.players[0].id;
  }

  action(action: string) {
    if (action === "fold") {
      //TODO: Implement fold
    } else if (action === "call") {
      return;
    } else if (action === "raise") {
      return;
    }

    this.turnId =
      this.players[
        (this.players.findIndex((player) => player.id === this.turnId) + 1) %
          this.players.length
      ].id;
  }

  hasGameStarted() {
    return this.gameStarted;
  }

  addPlayer(player: Player) {
    console.log("Adding player %s to lobby %s", player.username, this.id);
    this.players.push(player);
  }

  removePlayer(playerId: string) {
    const index = this.players.findIndex((player) => player.id === playerId);
    if (index !== -1) {
      this.players.splice(index, 1);
    }
  }
}
