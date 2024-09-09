// Wrong
interface PrinterInterface {
    print: () => void;
    scan: () => void;
}

class Printer implements PrinterInterface {
    print: () => void;
    scan: () => void;
}

interface BasicPrinterInterface {
    print: () => void;
}

class BasicPrinter implements BasicPrinterInterface {
    print: () => void;
}

// Right
interface BasicPrinterInterface {
    print: () => void;
}

interface PrinterWithScanInterface {
    scan: () => void;
}

class Printer implements BasicPrinterInterface, PrinterWithScanInterface {
    print: () => void;
    scan: () => void;
}

class BasicPrinter implements BasicPrinterInterface {
    print: () => void;
}