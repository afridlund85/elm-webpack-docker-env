module Main exposing (..)

import Html exposing (Html, div, program, text)
import Model exposing (Model, Msg, init)
import Update exposing (update)
import View exposing (view)


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main : Program Never Model Msg
main =
    program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
