module Model exposing (..)


type Msg
    = ToggleNav
    | NoOp


type alias Model =
    { showNav : Bool }


init : ( Model, Cmd Msg )
init =
    ( { showNav = False }
    , Cmd.none
    )
