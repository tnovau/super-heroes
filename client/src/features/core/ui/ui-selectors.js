const selectUi = (state) => state.ui;
export const selectLoading = (state) => selectUi(state).loading;
