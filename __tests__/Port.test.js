const Port = require('../src/Port.js')

describe('Port', () => {
  describe("adding and removing ships to ports", () => { 
    let port;
    let titanic;
    let queenMary;
    let ship;

    beforeEach(() => {
      port = new Port ('Dover');
      titanic = jest.fn();
      queenMary = jest.fn();
      ship = jest.fn(); // isolating tests with dummies
    })

    it('can be instantiated', () => {
      expect(new Port()).toBeInstanceOf(Object);
    });

    it('check port name', () => {
      expect(port.name).toBe('Dover');
    });
    
    it('can add a ship', () => {
      port.addShip(ship);
  
      expect(port.name).toBe('Dover');
  
    });
  
    it('can remove a ship', () => {
      //const titanic = {};
      //const queenMary = {};
  
      port.addShip(titanic);
      port.addShip(queenMary);
      port.removeShip(queenMary);
  
      expect(port.ships).toEqual([titanic]);
  
    });
  });
});