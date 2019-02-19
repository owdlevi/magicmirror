if [ -z "$DISPLAY" ]; then #If not set DISPLAY is SSH remote or tty
	export DISPLAY=:0 # Set by default display
fi
cross-env NODE_ENV=production electron ./app/main.prod.js $1
