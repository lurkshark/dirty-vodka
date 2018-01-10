all:
	cd src && zip -r ../release.zip *

clean:
	rm -f release.zip
