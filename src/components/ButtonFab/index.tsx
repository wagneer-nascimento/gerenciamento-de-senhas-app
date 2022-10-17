import React from "react";
import { COLORS } from "../../theme";
import { IconsAntDesigns } from "../icons/Icons";
import { PositionButtonAddAccount, ContainerButtonAddAccount } from "./styles";

interface Props {
    onPress(): void;
    type: "ADD" | "EDIT";
}

export default function ButtonFab({ onPress, type = "ADD" }: Props) {
    return (
        <PositionButtonAddAccount>
            <ContainerButtonAddAccount onPress={onPress}>
                <IconsAntDesigns name={type == "ADD" ? "plus": "edit"} size={25} color={COLORS.ORANGE} />
            </ContainerButtonAddAccount>
        </PositionButtonAddAccount>
    )
}