port module Counter
    exposing
        ( Model
        , Msg
        , init
        , update
        , subscriptions
        )

import Platform


-- PORTS


port increment : (() -> msg) -> Sub msg


port updated : Model -> Cmd msg



-- STATE


type alias Model =
    { value : Int
    }


type Msg
    = Increment


init : Model -> ( Model, Cmd Msg )
init model =
    ( model, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    increment (always Increment)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Increment ->
            let
                newModel =
                    { model | value = model.value + 1 }
            in
                ( newModel, updated newModel )
