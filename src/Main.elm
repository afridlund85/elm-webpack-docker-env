module Main exposing (..)

import Html exposing (program)
import Model exposing (Model, Msg, model, update)
import View exposing (view)


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main : Program Never Model Msg
main =
    program
        { init = ( model, Cmd.none )
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
