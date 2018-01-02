module Model exposing (..)

import Material


type Msg
    = Mdl (Material.Msg Msg)
    | SelectTab Int


type alias Model =
    { mdl : Material.Model, selectedTab : Int }


model : Model
model =
    { mdl = Material.model, selectedTab = 0 }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Mdl msg_ ->
            Material.update Mdl msg_ model

        SelectTab num ->
            { model | selectedTab = num } ! []
