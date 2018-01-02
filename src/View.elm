module View exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class, href, style)
import Material
import Material.Button as Button
import Material.Color as Color
import Material.Layout as Layout
import Material.Options as Options exposing (css)
import Material.Scheme as Scheme
import Model exposing (..)


view : Model -> Html Msg
view model =
    Scheme.topWithScheme Color.Teal Color.LightGreen <|
        Layout.render Mdl
            model.mdl
            [ Layout.fixedHeader
            , Layout.rippleTabs
            , Layout.onSelectTab SelectTab
            , Layout.selectedTab model.selectedTab
            ]
            { header = header model
            , drawer = drawer model
            , tabs = ( [ text "Asd", text "Qwe" ], [] )
            , main = [ viewBody model ]
            }


header : Model -> List (Html Msg)
header model =
    [ Layout.row []
        [ Layout.title [] [ text "Header" ]
        , Layout.spacer
        , Layout.navigation []
            [ Layout.link
                [ Layout.href "https://github.com/debois/elm-mdl" ]
                [ span [] [ text "github" ] ]
            ]
        ]
    ]


drawer : Model -> List (Html Msg)
drawer model =
    [ Layout.title [] [ text "elm-mdl" ]
    , Layout.navigation
        []
        [ Layout.link
            [ Layout.href "https://github.com/debois/elm-mdl" ]
            [ text "github" ]
        ]
    ]


viewBody : Model -> Html Msg
viewBody model =
    case model.selectedTab of
        0 ->
            asdView model

        1 ->
            qweView model

        _ ->
            text "404"


asdView : Model -> Html Msg
asdView model =
    div [] [ text "asd" ]


qweView : Model -> Html Msg
qweView model =
    div [] [ text "qwe" ]
