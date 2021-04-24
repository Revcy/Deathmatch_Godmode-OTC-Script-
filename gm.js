UI.AddLabel("Deathmatch Godmode");
UI.AddLabel("by Revcy, pers0na5, matthewthecoddy (aka matt)");

var lastTick = 0;
var currentTick = 0;

function dm_gm() 
{
    if (!World.GetServerString())
        lastTick = 0;
        currentTick = 0;
        return;

    if (!Entity.IsAlive(Entity.GetLocalPlayer())) 
        return;

    currentTick = parseInt(Globals.Curtime() * 1000);

    if ((currentTick - 100) >= lastTick) {
        Cheat.ExecuteCommand( "open_buymenu" );
        Cheat.ExecuteCommand( "open_buymenu" );
        lastTick = currentTick;
    } else if (currentTick < 5000) 
        lastTick = 0;
}

Cheat.RegisterCallback("FrameStageNotify", "dm_gm");
