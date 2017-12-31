module View exposing (..)

import Html exposing (Attribute, Html, div, li, text, ul)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Model exposing (Model, Msg)
import Nav.View as NavView


view : Model -> Html Msg
view model =
    div [ class "main" ]
        [ div [ class "header" ]
            [ div [ class "logo" ] []
            , div [ class "nav-toggle", onClick Model.ToggleNav ] [ text "toggle" ]
            , NavView.view model
            ]
        , div [] [ text "main" ]
        , div [] [ text "footer" ]
        ]
