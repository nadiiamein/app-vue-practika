<template>
    <div class="info-artist">
        <div class="info-artist__name">{{name}}</div>
                <div class="info-artist__summary" v-html="summary"/>
                        <div class="info-artist__tags">
                                    <div class="info-artist__tag"
                                    v-vor="tag in tags"
                                    :key="tag">
                                    {{tag}}

                                    </div>

                        </div>


    </div>
</template>

<script>

export default {
    props: {
        name: String,
        summary: String,
        tags: Array,
    }
}
</script>


<style lang="scss" scoped>
.info-artist {
    margin-top: 5rem;

    &__name {
        font-size: 2.4rem;
    }

    &__summary {
        font-size: 1.4rem;
        line-height: 1.5;
        margin-top: 2rem;

        ::v-deep(a) {
            color: inherit;
        }
    }

    &__tags {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-top: 2rem;
    }

    &__tag {
        font-size: 1.4rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: #e1e1e8;
        border-radius: .5rem;
        padding: .5rem 1rem;
        user-select: none;
    }
}
</style>