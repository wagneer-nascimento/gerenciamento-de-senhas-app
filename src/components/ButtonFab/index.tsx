import React from "react";
import { COLORS } from "../../theme";
import { IconsAntDesigns } from "../icons/Icons";
import { PositionButtonAddAccount, ContainerButtonAddAccount } from "./styles";

interface Props {
    onPress(): void;
    type: "ADD" | "EDIT" | "DELETE";
}

export default function ButtonFab({ onPress, type = "ADD" }: Props) {

    function typeIcon() {
        switch (type) {
            case 'EDIT':
                return <IconsAntDesigns name="edit" size={25} color={COLORS.ORANGE} />
            case 'DELETE':
                return <IconsAntDesigns name="delete" size={25} color={COLORS.ORANGE} />
            default:
                return <IconsAntDesigns name="plus" size={25} color={COLORS.ORANGE} />
        }
    }

    return (
        <PositionButtonAddAccount>
            <ContainerButtonAddAccount onPress={onPress}>
                {typeIcon()}
            </ContainerButtonAddAccount>
        </PositionButtonAddAccount>
    )
}