function numericalEnumsAndReverseMapping() {
    enum Sizes {
        'SMALL',
        'MEDIUM',
        'LARGE'
    }

    enum Sizes {
        'EXTRALARGE' = 3
    }

    console.log({ sizePosition: Sizes.LARGE, stringValue: Sizes[2] });
};

function stringEnumAndInliningMember() {
    enum Sizes {
        SMALL = 'SMALL',
        MEDIUM = 'MEDIUM',
        LARGE = 'LARGE'
    }

    const enum Tamanhos {
        PEQUENO = 'PEQUENO',
        MEDIO = 'MEDIO',
        GRANDE = 'GRANDE'
    }

    let selected: Tamanhos = Tamanhos.PEQUENO;

    function updateSize(size: Tamanhos): void {
        selected = size;
    }

    updateSize(Tamanhos.GRANDE);
}