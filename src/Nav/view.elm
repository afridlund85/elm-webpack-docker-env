module Nav.View exposing (..)

import Html exposing (Attribute, Html, div, li, text, ul)
import Html.Attributes exposing (..)
import Model exposing (Model, Msg)


view : Model -> Html Msg
view model =
    if model.showNav then
        div [ class "nav" ]
            [ ul []
                [ li [] [ text "Home" ]
                , li [] [ text "About" ]
                ]
            ]
    else
        text ""
