<template>
  <q-page class="address-book" style="min-height: unset;">
    <section v-show="this.isvisible">
      <article class="flex row justify-between addbtn-box align-center">
        <div
          class="header row q-pt-md q-pb-xs q-mx-md q-mb-none items-center non-selectable ft-semibold "
        >
          {{ $t("titles.addressBook") }}
        </div>
        <q-btn round color="primary" icon="add" @click="addEntry" />
      </article>
      <template v-if="address_book_combined.length">
        <q-list link no-border :dark="theme == 'dark'" class="oxen-list">
          <q-item
            v-for="(entry, index) in address_book_combined"
            :key="`${entry.address}-${entry.name}-${index}`"
            class="oxen-list-item"
            @click.native="details(entry)"
          >
            <q-item-section side>
              <article class="flex row">
                <q-item-label class=" flex justify-center star-icon">
                  <q-icon
                    size="24px"
                    :name="entry.starred ? 'star' : 'star_border'"
                  />
                  <q-tooltip
                    anchor="bottom right"
                    self="top right"
                    :offset="[0, 5]"
                  >
                    {{ $t("menuItems.favourite") }}
                  </q-tooltip>
                  <!-- <q-btn
                color="primary"
                style="margin-left: 10px;"
                :label="$t('buttons.send')"
                :disabled="view_only"
                @click="sendToAddress(entry, $event)"
              /> -->
                </q-item-label>

                <div class="copy-icon q-ml-sm">
                  <q-btn
                    flat
                    padding="sm"
                    size="sm"
                    icon="content_copy"
                    class="q-mr-sm"
                    color="green"
                    @click="copyAddress(entry)"
                  >
                    <q-tooltip
                      anchor="bottom right"
                      self="top right"
                      :offset="[0, 5]"
                    >
                      {{ $t("menuItems.copyAddress") }}
                    </q-tooltip>
                  </q-btn>
                </div>
              </article>
            </q-item-section>
            <q-item-section @click.native="details(entry)">
              <q-item-label class="ellipsis address-label ">{{
                entry.address
              }}</q-item-label>
              <q-item-label class="non-selectable address-sub-label" caption>{{
                entry.name
              }}</q-item-label>
            </q-item-section>
            <ContextMenu
              :menu-items="menuItems"
              @showDetails="details(entry)"
              @sendToAddress="sendToAddress(entry, $event)"
              @copyAddress="copyAddress(entry)"
            />
          </q-item>
        </q-list>
      </template>
      <template v-else>
        <p class="q-ma-md tab-desc">{{ $t("strings.addressBookIsEmpty") }}</p>
      </template>
    </section>
    <!-- 
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round color="primary" icon="add" @click="addEntry" />
    </q-page-sticky> -->
    <section>
      <AddressBookDetails
        ref="addressBookDetails"
        @isvisible="displayAddressList"
      />
    </section>
  </q-page>
</template>

<script>
const { clipboard } = require("electron");
import { mapState } from "vuex";
import AddressBookDetails from "components/address_book_details";
import ContextMenu from "components/menus/contextmenu";
export default {
  components: {
    AddressBookDetails,
    ContextMenu
  },
  data() {
    const menuItems = [
      { action: "showDetails", i18n: "menuItems.showDetails" },
      { action: "sendToAddress", i18n: "menuItems.sendToThisAddress" },
      { action: "copyAddress", i18n: "menuItems.copyAddress" }
    ];

    return {
      menuItems,
      isvisible: true
    };
  },
  computed: mapState({
    theme: state => state.gateway.app.config.appearance.theme,
    view_only: state => state.gateway.wallet.info.view_only,
    address_book: state => state.gateway.wallet.address_list.address_book,
    address_book_starred: state =>
      state.gateway.wallet.address_list.address_book_starred,
    address_book_combined() {
      const starred = this.address_book_starred.map(a => ({
        ...a,
        starred: true
      }));
      return [...starred, ...this.address_book];
    }
  }),
  methods: {
    details: function(entry) {
      this.$refs.addressBookDetails.entry = entry;
      this.$refs.addressBookDetails.mode = "view";
      this.$refs.addressBookDetails.isVisible = true;
      this.isvisible = false;
    },
    addEntry: function() {
      this.$refs.addressBookDetails.entry = null;
      this.$refs.addressBookDetails.mode = "new";
      this.$refs.addressBookDetails.isVisible = true;
      this.isvisible = false;
    },
    sendToAddress(address, event) {
      event.stopPropagation();
      this.$router.replace({
        path: "send",
        query: {
          address: address.address
        }
      });
    },
    displayAddressList() {
      this.isvisible = true;
    },
    copyAddress(entry) {
      console.log("copy address", entry);
      clipboard.writeText(entry.address);
      this.$q.notify({
        type: "positive",
        timeout: 1000,
        message: this.$t("notification.positive.addressCopied")
      });
    }
  }
};
</script>

<style lang="scss">
.address-book {
  .header {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  }

  .oxen-list-item {
    cursor: pointer;
    padding-top: 12px;
    padding-bottom: 12px;

    .q-item-sublabel {
      font-size: 14px;
    }

    .q-item-label {
      font-weight: 400;
    }

    .q-item-section {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 12px;
    }
  }
  .addbtn-box {
    .q-btn {
      font-size: 11px;
    }
    .bg-primary {
      height: 31px;
      min-width: unset;
    }
  }
  .star-icon {
    width: 35px;
    background-color: #1f1f28;
    height: 35px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    color: #2879fb;
  }

  .copy-icon {
    .q-btn {
      background-color: #1f1f28;
      height: 35px;
      width: 35px;
    }
  }
  .address-label {
    color: #afafbe;
    font-size: 14px;
  }
  .address-sub-label {
    color: #afafbe;
    font-size: 10px;
  }
}
</style>
