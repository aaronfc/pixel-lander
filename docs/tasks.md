Tasks
=====

## Pending questions / Notes
- ❓ What is the relationship between gravity and thrust values?
- 💡 Maybe this has something to do with the /1000 that we saw in Phaser's code.
- `ParticleEmitterConfig::maxParticles` seems buggy - when setting it to 10, for example. We get an infinite generation sometimes randomly.
- Scenes:
  - Scenes ara managed from the ScenePlugin which is located at `this.scene`  from an scene itself.
  - There is two ways of starting an sceen `start('id', data)` and `run('id', data)`. The first one stops the current scene and the second one doesn't.
  - We need to register scenes in the game configuration (`index.js`). The first one will be automatically executed.

## Pipeline
- [X] ~~*Create repository*~~ [2021-01-27]
- [X] ~~*Setting up Phaser*~~ [2021-01-27]
  - Choose physics engine
  - Enable pixel-art mode
  - ...
- [X] ~~*Create the Lander entity*~~ [2021-01-27]
- [X] ~~*Allow user to control Lander with Arrow Keys*~~ [2021-01-27]
- [X] ~~*Make lander explode*~~ [2021-02-03]
- [X] ~~*Make lander land smoothly*~~ [2021-02-03]
- [X] ~~*Add fuel limitation*~~ [2021-02-03]
- [X] ~~*Display fuel on screen in a separe scene*~~ [2021-02-05]
- [X] ~~*Game over scene + retry*~~ [2021-02-05]
- [ ] Generate ground randomly
- [ ] Add fire animation (jet/propeller)
  - 💡 Use particle emitter with pixel-art particles. Maybe use it also for the fire.