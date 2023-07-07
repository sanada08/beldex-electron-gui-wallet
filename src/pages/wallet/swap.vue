<template>
  <q-page class="swap" style="min-height: unset">
    <header class="text-h6 ft-bold">Exchange</header>

    <OxenField class="q-mt-md ft-regular" label="You send">
      <q-input
        v-model.trim="address"
        :dark="theme == 'dark'"
        borderless
        dense
        :placeholder="0"
      />
      <q-select
        v-model="sendAmounType"
        :options="sendAmounTypeOption"
        borderless
        dense
        emit-value
        map-options
        :menu-offset="[50, 5]"
        :options-html="sendAmounType"
        class="ft-semibold q-pl-sm dropdown-send-type"
        popup-content-class="exchage-option"
        dropdown-icon="expand_more"
      />
    </OxenField>
    <span class="q-mt-xs">Minimum amount is 762 BDX</span>
    <div class="flex justify-end ">
      <q-btn color="accent" class="swap-btn q-mt-sm">
        <svg
          width="18px"
          height="18px"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="icons8-sorting_arrows_horizontal 1"
            clip-path="url(#clip0_81_8938)"
          >
            <path
              id="Vector"
              d="M2.53125 4.24068C2.53125 4.58443 2.73948 4.89183 3.05679 5.02404C3.3774 5.15294 3.74098 5.07692 3.98227 4.82903L5.92247 2.88882L5.92248 15.2308L7.61478 15.2308L7.61478 2.88882L9.55499 4.82903C9.76653 5.05048 10.0838 5.13972 10.378 5.0604C10.6755 4.98437 10.9069 4.753 10.9829 4.45553C11.0622 4.16136 10.973 3.84405 10.7515 3.63251L7.36689 0.247896C7.03636 -0.0826323 6.5009 -0.0826322 6.17037 0.247896L2.78576 3.63251C2.62049 3.79117 2.53125 4.00931 2.53125 4.24068ZM5.92248 22L7.61478 22L7.61478 20.3077L5.92248 20.3077L5.92248 22ZM5.92248 18.6154L7.61478 18.6154L7.61478 16.9231L5.92248 16.9231L5.92248 18.6154ZM10.9895 17.7858C10.9961 18.0072 11.0886 18.2154 11.2473 18.3675L14.6319 21.7521C14.9624 22.0826 15.4979 22.0826 15.8284 21.7521L19.213 18.3675C19.4345 18.1559 19.5237 17.8386 19.4444 17.5445C19.3684 17.247 19.137 17.0156 18.8395 16.9396C18.5454 16.8603 18.2281 16.9495 18.0165 17.171L16.0763 19.1112L16.0763 6.76923L14.384 6.76923L14.384 19.1112L12.4438 17.171C12.1992 16.9198 11.829 16.8471 11.5084 16.9826C11.1845 17.1181 10.9796 17.4354 10.9895 17.7858ZM14.384 5.07692L16.0763 5.07692L16.0763 3.38461L14.384 3.38461L14.384 5.07692ZM14.384 1.69231L16.0763 1.69231L16.0763 -5.92074e-07L14.384 -5.18101e-07L14.384 1.69231Z"
              fill="#A9A9CD"
            />
          </g>
          <defs>
            <clipPath id="clip0_81_8938">
              <rect
                width="22"
                height="22"
                fill="white"
                transform="translate(0 22) rotate(-90)"
              />
            </clipPath>
          </defs>
        </svg>
      </q-btn>
    </div>

    <OxenField class="ft-regular" label="You get">
      <q-input
        v-model.trim="address"
        :dark="theme == 'dark'"
        borderless
        dense
        :placeholder="0"
      />
      <q-select
        v-model="sendAmounType"
        :options="sendAmounTypeOption"
        borderless
        dense
        emit-value
        map-options
        :menu-offset="[50, 5]"
        :options-html="sendAmounType"
        class="ft-semibold q-pl-sm dropdown-send-type"
        popup-content-class="exchage-option"
        dropdown-icon="expand_more"
      />
    </OxenField>
    <article>
      <q-expansion-item
        dense
        dense-toggleexpand-icon-toggle
        expand-separator
        class="fee-expand q-mt-md"
        dropdown-icon="expand_more"
        label="All fees included"
      >
        <q-card class="drp-content">
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </article>

    <section class="exerate-wrapper q-mt-md q-pa-sm">
      <article class="flex row exerate-inner-wrapper q-py-sm">
        <div class="col-1 flex justify-center items-center">
          <span class="flex justify-center items-center icon" style="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icons8-padlock 1">
                <path
                  id="Vector"
                  d="M12 1C14.8722 1 17.2811 3.04615 17.877 5.78711L15.9219 6.21289C15.5177 4.35385 13.9278 3 12 3C9.72381 3 8 4.72381 8 7V8H18C19.1 8 20 8.9 20 10V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V10C4 8.9 4.9 8 6 8V7C6 3.67619 8.67619 1 12 1ZM12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13Z"
                  fill="#A9A9CD"
                />
              </g>
            </svg>
          </span>
        </div>
        <div class="col-10">
          <span class="ft-semibold">Floating Exchange Rate</span><br />
          <span class="ft-regular" style="color: #afafbe; font-size: 12px"
            >Your amount could chage depending on the market conditions</span
          >
        </div>
      </article>

      <article class="flex row exerate-inner-wrapper q-py-sm q-mt-sm">
        <div class="col-1 flex justify-center items-center">
          <span class="flex justify-center items-center icon" style="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icons8-lock 3">
                <path
                  id="Vector"
                  d="M12 1C8.67619 1 6 3.67619 6 7V8C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8V7C18 3.67619 15.3238 1 12 1ZM12 3C14.2762 3 16 4.72381 16 7V8H8V7C8 4.72381 9.72381 3 12 3ZM12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13Z"
                  fill="#A9A9CD"
                />
              </g>
            </svg>
          </span>
        </div>
        <div class="col-10">
          <span class="ft-semibold">Fixed Exchange Rate</span><br />
          <span class="ft-regular" style="color: #afafbe; font-size: 12px"
            >Your amount will remain the same irrespective of the changes on the
            market</span
          >
        </div>
      </article>
    </section>

    <div class="flex justify-center q-my-lg">
      <q-btn label="Exchange" color="primary" />
    </div>
  </q-page>
</template>

<script>
import OxenField from "components/oxen_field";
export default {
  components: {
    OxenField
  },
  data() {
    return {
      sendAmount: "",
      getAmount: "",
      sendAmounType:
        "BDX<span class='currency-name ft-regular'> - beldex<span>",
      sendAmounTypeOption: [
        {
          label: this.$t("strings.transactions.types.all"),
          value: "all"
        },
        {
          label: this.$t("strings.transactions.types.incoming"),
          value: "in"
        },
        {
          label: this.$t("strings.transactions.types.outgoing"),
          value: "out"
        }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
