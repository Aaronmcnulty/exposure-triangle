
function ExposureDisplay({aperature, shutterSpeed, iso}){

    const apertureOptions = [11, 16, 8, 5.6, 4, 2.8, 2, 1.4]
    const isoOptions = [100, 200, 400, 800, 1600, 3200, 6400, 12800]
    const shutterSpeedOptions = ['1/1000', '1/800', '1/250', '1/125', '1/60', '1/30', '1/15', '1/8']


    return(

        <div>
            <p> Aperature: {apertureOptions[aperature]}</p>

            <p> Shutter Speed: {shutterSpeedOptions[shutterSpeed]}</p>

            <p>ISO: {isoOptions[iso]}</p>
        </div>
    )

}

export default ExposureDisplay;