import { ALTERNAR_THEME } from "../actions/themeActions";

export const themeWhiteDark = (state = [true], action) => {
    switch (action.type) {
        case ALTERNAR_THEME:
            return [!state[0]]
        default:
            return [...state]
    }
}