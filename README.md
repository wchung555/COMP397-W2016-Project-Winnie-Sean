# COMP397-W2016-Assignment3-Winnie-Chung Project

Project Name: COMP397-W2016-Project-Winnie-Sean  
Authors: Winnie Chung, Sean Smith  
Description: A runner game starring comic book characters  
Created: Apr. 4, 2016  
Last Modified: April 11, 2016 by Sean Smith
#### Revision History:  

**For known errors, a check mark ([x]) means fixed or patched**
##### Apr. 4:  
###### Initial commit (W)  
\--------------------------------------------------------------------------------------  
##### Apr. 8: 
###### Allowed change to Play scene; set motion and boundaries of player avatar (S)  
\-------------------------------------------------------------------------------------  
##### Apr. 10:  
###### Added level 1, removed unused assets; TODO: include correct asset for batwing (W)  
\----------------------------------------------------------------------------------    
###### Tweak assets and minor changes:  (S)
- Changed enemy from cat to batarang.  
- Added Batarang class to replace Batwing class; virtually no changes.  
Kept batwing object file for this commit; removed from reference path.  
\----------------------------------------------------------------------------------    
###### Implemented new method of scrolling the game world: (S)  
- Changed objects.World to have a programmable setting to add a second instance of background for modified scroll method.  
- Updated menu and Level 1 scenes to use new setting in objects.World.  
        **Known Issue** 
       - [ ] seems to be a 2-3 pixel gap between first and second instance of world background objects.  
            Attempted patch: Subtract 5 from new reset position to create overlap. Made no difference.  
- Shifted player object down to ground level.  
\----------------------------------------------------------------------------------    
###### Implemented new level & Bug fixes:  (S)  
- Set play button to go straight to level 2 for testing.  
- Began fix on inter-batarang collision detection.  
  - Created bounceX function.Buggy. Undiagnosed.  
  Note: This is unnecessary as probability of collision in real-world scenario is extremely low.  
  **KNOWN ERRORS** 
  - [x] Batarangs disappear on collision. After undoing all my changes for collisions, problem persists. Undiagnosed.  
- Created level 2 file/class  
  -added code for generating spikes.  
- Created spikes file/class  
  **KNOWN ERRORS**  
  - [x] Spikes not scrolling.  
  - [ ] Spikes being created at `y=0` instead of `y= (World.floor - regY)`  
\----------------------------------------------------------------------------------  
##### Apr. 11 ========================================================================   
###### Completed functionality on spikes, bug fixes, enhancements: (S)  
- Fixed spike  
  - Stopped rendering at top of screen. Renders correctly at the world floor.  
  - Corrected left to right motion.  
  - Fixed issue where spikes rendered in the game scene instead of outside.  
  **Known Issues**   
  - [ ] Spikes still seem slightly predictable. Minor. Fix later.  

- Fixed Batarang collisions.
- Changed `_lives` from level-scope to game scope. Renamed to `lives`.  
  Allows for lives to carry over to the next screen. The better a player does in the level before, the better their chances of success are in the later levels.  
