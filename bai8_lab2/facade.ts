// Define interfaces
interface LightSystem {
  turnOn(): void;
  turnOff(): void;
}

interface SecuritySystem {
  arm(): void;
  disarm(): void;
}

// Implement subsystems
class MyLightSystem implements LightSystem {
  turnOn() {
    console.log("Lights turned on");
  }
  turnOff() {
    console.log("Lights turned off");
  }
}

class MySecuritySystem implements SecuritySystem {
  arm() {
    console.log("Security system armed");
  }
  disarm() {
    console.log("Security system disarmed");
  }
}

// Create the HomeAutomationFacade that simplifies interaction with the subsystems
class HomeAutomationFacade {
  private lightSystem: LightSystem;
  private securitySystem: SecuritySystem;

  constructor(lightSystem: LightSystem, securitySystem: SecuritySystem) {
    this.lightSystem = lightSystem;
    this.securitySystem = securitySystem;
  }

  goodMorning() {
    // Turn on the lights and disarm the security system
    this.lightSystem.turnOn();
    this.securitySystem.disarm();
  }

  goodNight() {
    // Turn off the lights and arm the security system
    this.lightSystem.turnOff();
    this.securitySystem.arm();
  }
}
