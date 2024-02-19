//Diver rotation component
AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 },
    speedOfMovement: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      //data
      this.data.speedOfRoation = this.el.getAttribute("rotation");      
      this.data.speedOfMovement = this.el.getAttribute("position");

      var diverRotation = this.data.speedOfRoation;      
      var diverPosition = this.data.speedOfMovement;

      //controls
      if (e.key === "ArrowDown" || e.key === "s") {
        if (diverPosition.z < 20) {
          diverPosition.z += 0.2;
          this.el.setAttribute("position", diverPosition);
        }
      }
      if (e.key === "ArrowUp" || e.key === "w") {
        if (diverPosition.z> -10) {
          diverPosition.z -= 0.1;
          this.el.setAttribute("position", diverPosition);
        }
      }
      if (e.key === "ArrowRight" || e.key === "d") {
        if (diverRotation.y > -360) {
          diverRotation.y -= 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
        if (diverPosition.x < 20) {
          diverPosition.x += 0.05;
          this.el.setAttribute("position", diverPosition);
        }
      }
      if (e.key === "ArrowLeft" || e.key === "a") {
        if (diverRotation.y <360) {
          diverRotation.y += 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
        if (diverPosition.x > -20) {
          diverPosition.x -= 0.05;
          this.el.setAttribute("position", diverPosition);
        }
      }
    });
  }
});