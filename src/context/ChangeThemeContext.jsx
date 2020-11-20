import React, { useState } from 'react';

export const  StateThemeContext = React.createContext();

const ChangeThemeProvider = props => {
	
	const [isDark, setIsDark] = useState(false);

	return (
		<StateThemeContext.Provider value={{
			isDark,
			setIsDark,
		}}>
			{ props.children }
		</StateThemeContext.Provider>
	)
}

export default ChangeThemeProvider;