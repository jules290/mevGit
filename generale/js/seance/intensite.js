function intensite(Pma, fcMax, Zone) {
    if (localStorage.PMA > 0) {
        return intensiteW(Pma.b, Pma.h);
    }
    else if (localStorage.fcMax > 0) {
        return intensiteFc(Pma, fcMax);
    }
    else {
        return intensiteRien(Zone);
    }
}

function intensiteW(b, h) {
    Pma = JSON.parse(localStorage.PMA);
    
    return `entre ${Math.round((b/100) * Pma)}W et ${Math.round((h/100) * Pma)}W`
}

function intensiteFc(Pma, FcMax) {
    fcMax = JSON.parse(localStorage.fcMax);

    return `entre ${Math.round((FcMax.b/100) * fcMax)}BPM et ${Math.round((FcMax.h/100) * fcMax)}BPM`
}

function intensiteRien(Zone) {
    if (Zone == 1) return "Zone 1"
    else if (Zone == 2) return "Zone 2"
    else if (Zone == 3) return "Zone 3"
    else if (Zone == 4) return "Zone 4"
    else if (Zone == 5) return "Zone 5"
    else if (Zone == 6) return "Zone 6"
    else if (Zone == 7) return "Zone 7"
}